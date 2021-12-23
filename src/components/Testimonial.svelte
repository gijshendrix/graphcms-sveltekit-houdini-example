<script >
  import { fragment, graphql } from '$houdini'

  // the reference will get passed as a prop
  export let props;

  const data = fragment(graphql`
        fragment TestimonialFragment on TestimonialComponent {          
          name
          title
          body
          avatar {
            url
          }
        }
    `, props)  

</script>

<section id="testimonail">
  <div>
    <h1>Testimonial Component</h1>
    <p>"{props.body}"</p>
    <p>{props.name}</p>
    <p>{props.title}</p>
    <img src={props.avatar.url} />
  </div>
</section>

<style>
  div {
    padding: 5px;
    border: 1px dashed;
    margin-bottom: 5px;
  }
  img {
    width: 100px;
  }
</style>
