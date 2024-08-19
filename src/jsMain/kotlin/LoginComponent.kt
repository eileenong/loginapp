import io.ktor.client.request.forms.*
import web.html.HTMLFormElement
import react.*
import web.html.HTMLInputElement
import react.dom.events.ChangeEventHandler
import react.dom.events.FormEventHandler
import react.dom.html.ReactHTML
import web.html.InputType
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.sub
import web.cssom.atrule.color
import web.cssom.atrule.height
import web.html.ButtonType
import web.html.ButtonType.Companion.submit

external interface LoginProps : Props {
	var onSubmit: (String) -> Unit
}

val LoginComponent = FC<LoginProps> { props ->
	var (username, setUsername) = useState("")
	var (password, setPassword) = useState("")


	val submitHandler: FormEventHandler<HTMLFormElement> = {
		it.preventDefault()
		setUsername("")
		setPassword("")
		props.onSubmit(username+"\r"+password)
	}

	val changeHandler: ChangeEventHandler<HTMLInputElement> = {
		setUsername(it.target.value)
		setPassword(it.target.value)
	}

	form {
		onSubmit = submitHandler
		label {
			+"Username:"
		}
		input {
			type = InputType.text
			onChange = { setUsername(it.target.value) }
			value = username
		}
		label {
			+"Password:"
		}
		input {
			type = InputType.text
			onChange = { setPassword(it.target.value) }
			value = password
		}
		input {
			type = InputType.submit
			value = "Login"
		}
	}
}