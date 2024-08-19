import kotlinx.serialization.Serializable

@Serializable
data class User(val username: String, val password: String) {
    val id: Int = username.hashCode()

    companion object {
        const val path = "/userList"
    }
}
