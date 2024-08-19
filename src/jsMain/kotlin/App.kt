import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.utils.io.core.*
import kotlinx.coroutines.*
import react.*
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.ul
import web.crypto.crypto
import web.encoding.TextEncoder

private val scope = MainScope()

val App = FC<Props> {
    var userList by useState(emptyList<User>())
    var currentUser by useState("")

    useEffectOnce {
        scope.launch {
            userList = getUserList()
            currentUser = getCurrentUser()
        }
    }

    Navbar{

    }

    h1 {
        +"Login App"
    }
    ul {
        userList.forEach { item ->
            li {
                key = item.toString()
                onClick = {
                    scope.launch {
                        deleteUser(item)
                        userList = getUserList()
                    }
                }
                +"${item.username} [${item.password}]"
            }
        }
    }

    h2 {
        + "Create a new user"
    }

    InputComponent {
        onSubmit = { input ->
            val formData: List<String> = input.split("\r")
            val newUser = User(formData[0], formData[1])
            scope.launch {
                addUser(newUser)
                userList = getUserList()
            }
        }
    }

    h2 {
        + "Login"
    }

    LoginComponent {
        onSubmit = {input ->
            val formData: List<String> = input.split("\r")
            val user = User(formData[0], formData[1])
            var response: HttpResponse
            scope.launch {
                response = authenticateUser(user)
                println(response.toString())
                if(response.status == HttpStatusCode.OK) {
                    println(user.username + " is now logged in")
                    currentUser = getCurrentUser()
                } else {
                    println("invalid username or password")
                }

            }
        }
    }

    button {
        +"Log out"
        onClick = {
            scope.launch {
                var username = logoutUser()
                println(username + "is now logged out")
                currentUser = getCurrentUser()
            }
        }
    }

    h2 {
        +"Current User: "
        +currentUser
    }
}

