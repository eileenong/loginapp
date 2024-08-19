import react.*
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.link

val Navbar = FC<Props> {
	a {
		button {
			+"Register"
		}
		href = "/"
	}
	a {
		button {
			+"Login"
		}
		href = "/login"
	}
}