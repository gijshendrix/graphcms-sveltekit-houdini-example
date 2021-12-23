<script>
  import { fragment, graphql } from '$houdini'

  // the reference will get passed as a prop
  export let props;

  const data = fragment(graphql`
      fragment TextFragment on TextComponent {
        title
        body
      }
  `, props)
</script>

<section id="textcomponent">
  <div>
    <h1>Text Component: {props.title}</h1>
    <p>{props.body}</p>
  </div>
</section>

<style>
  div {
    padding: 5px;
    border: 1px dashed;
    margin-bottom: 5px;
  }
</style>