export default function Form() {
  return (
    <form action="/api/form" method="post">
      <label for="nome">Nome:</label>
      <input required type="text" id="nome" name="nome" />
      <label for="email">Email:</label>
      <input required type="email" id="email" name="email" />
      <button type="submit">Enviar</button>
    </form>
  )
}