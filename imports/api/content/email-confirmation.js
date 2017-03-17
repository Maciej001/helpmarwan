export const emailConfirmation = ({ firstName }) => {
  return `
<h3>Hi ${ firstName },</h3>

<p>
Thanks a lot for your message. You are a star!

<br></br>
I will come back to you as soon as possible.


<br></br>
Best,
<br></br>
<span>Maciej</span>

</p>
`
}
