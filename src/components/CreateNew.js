import { useField } from '../hooks'

const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    content.reset()
    author.reset()
    info.reset()
  }

  const formStyle = {
    padding: '2px'
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        
        <div style={formStyle}>
          content{' '}
          <input {...content}/>
        </div>

        <div style={formStyle}>
          author{' '}
          <input {...author}/>
        </div>

        <div style={formStyle}>
          url for more info{' '}
          <input {...info}/>
        </div>

        <button type="submit">create</button> <button type="reset">reset</button>
      </form>
      <br />
      
    </div>
  )
}

export default CreateNew