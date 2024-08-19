import io.ktor.http.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.compression.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.plugins.cors.routing.*
import java.security.MessageDigest
import kotlinx.serialization.json.Json
import kotlinx.serialization.encodeToString

val userList = mutableListOf(
    User("user1", "pass1"),
    User("user2", "pass2")
)

//val fileContent = User::class.java.getResource("/Users.json").readText()
//val userList = Json.decodeFromString<User>(fileContent)
//fun getUsersFromJsonFile(): MutableList<User> {
//    val jsonFileString = fileContent
//    return Gson().fromJson(jsonFileString, object : TypeToken<List<User>>() {}.type)
//}
var currentUser: String = ""

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 9090
    embeddedServer(Netty, port) {
        install(ContentNegotiation) {
            json()
        }
        install(CORS) {
            allowHeader(HttpHeaders.ContentType)
            allowMethod(HttpMethod.Get)
            allowMethod(HttpMethod.Post)
            allowMethod(HttpMethod.Delete)
            anyHost()
        }
        install(Compression) {
            gzip()
        }

        routing {
            staticResources("/", "static")
            route(User.path) {
                get {
                    call.respond(userList)
                }
                post {
                    userList += call.receive<User>()
                    call.respond(HttpStatusCode.OK)
                }
                delete("/{id}") {
                    val id = call.parameters["id"]?.toInt() ?: error("Invalid deletion request")
                    userList.removeIf {it.id == id}
                    call.respond(HttpStatusCode.OK)
                }
            }
            route("/authenticate") {
                get {
                    call.respond(currentUser)
                }
                post {
                    val user = call.receive<User>()
                    if(userList.contains(user)) {
                        call.respond(HttpStatusCode.OK, "authenticated")
                        currentUser = user.username
                    } else {
                        call.respond(HttpStatusCode.Unauthorized, "invalid username or password")
                    }
                }
            }
            route("/logout") {
                get {
                    call.respond(currentUser)
                    currentUser = ""
                }
            }
        }
    }.start(wait = true)
}
