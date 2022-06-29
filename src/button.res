@react.component
let make = () => {
  <button
    onClick={_ => {
      Js.log("clicked button")
    }}>
    {React.string("hi")}
  </button>
}
