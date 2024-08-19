import io.ktor.http.*
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.serialization.kotlinx.json.*

val jsonClient = HttpClient {
    install(ContentNegotiation) {
        json()
    }
}

suspend fun getUserList(): List<User> {
    return jsonClient.get(User.path).body()
}

suspend fun addUser(user: User) {
    jsonClient.post(User.path) {
        contentType(ContentType.Application.Json)
        setBody(user)
  }
}

suspend fun deleteUser(userList: User) {
    jsonClient.delete(User.path + "/${userList.id}")
}

suspend fun authenticateUser(user: User): HttpResponse {
    val response: HttpResponse = jsonClient.post("/authenticate") {
        contentType(ContentType.Application.Json)
        setBody(user)
    }
    return response
}

suspend fun getCurrentUser(): String {
    return jsonClient.get("/authenticate").body()
}

suspend fun logoutUser(): String {
    return jsonClient.get("/logout").body()
}