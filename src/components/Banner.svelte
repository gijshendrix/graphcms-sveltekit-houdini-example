<script >
  import { fragment, graphql } from '$houdini'

  // the reference will get passed as a prop
  export let props;

  const data = fragment(graphql`
        fragment BannerFragment on BannerComponent {
          title
          subtitle
          image {
            url(transformation: {image: {resize: {height: 400}}})
          }
        }
    `, props)  

</script>

<section id="banner">
  <div>
    <h1>Banner Component: {props.title}</h1>
    <p>{props.subtitle}</p>
    <img src={props.image.url} />
  </div>
</section>

<style>
  div {
    padding: 5px;
    border: 1px dashed;
    margin-bottom: 5px;
  }
  img {
    width: 400px;
  }
</style>