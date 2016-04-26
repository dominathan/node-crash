var blogPosts = [
  {
    id: 1,
    author: 'Nathan',
    blogTitle: 'Food Stuff',
    blogContent: 'I eat meat'
  },
  {
    id: 2,
    author: 'Henry',
    blogTitle: 'Porn Stuff',
    blogContent: 'I eat porn'
  },
  {
    id: 3,
    author: 'Frank',
    blogTitle: 'HOtDog',
    blogContent: 'I eat Hotdog'
  }
]

var Header = React.createClass({
  displayName: 'Header',

  render: function() {
    return (
      <nav>
        <h2>REACTSSTBDFS</h2>
        <ul>
          <li>Patrick</li>
          <li>IS</li>
          <li>AWESOME</li>
        </ul>
      </nav>
    )
  }
})

var Container = React.createClass({
  displayName: "Layout",

  changeColor: function(event) {
    if(event.target.style.color === "red") {
      event.target.style.color = "blue"
    } else {
      event.target.style.color = "red"
    }

  },

  showIndividual: function(event) {
    console.log(event.target);
  },

  render: function() {
    return (
      <div>
      {this.props.blogs.map(function(blog,index) {
        return (
            <div key={index} className="container" onClick={this.showIndividual}>
              <h1>{blog.blogTitle}</h1>
              <p>{blog.blogContent}</p>
              <p>{blog.author}</p>
            </div>
        )
      },this)}
      </div>
    )
  }
})

var Page = React.createClass({
  displayName: 'Page',
  render: function() {
    return (
      <div>
        <Header/>
        <Container blogs={blogPosts}/>
      </div>
    )
  }
})

ReactDOM.render(<Page />, document.getElementById('root'))
