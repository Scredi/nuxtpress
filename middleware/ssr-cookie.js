export default function (ctx) {
  if (process.server) {
    // todo: try fix headers
    // To prevent access allow origin...
    // const reqHeaders = Object.assign({}, ctx.req.headers)
    // console.log(ctx.req.headers)
    // console.log(ctx.res)
    // console.log(ctx.req.headers)
    // console.log(ctx.$axios.defaults.headers)
    // ctx.$axios.defaults.headers = ctx.req.headers
    // ctx.$axios.defaults.headers.common.cookie = reqHeaders.cookie
    // console.log(reqHeaders)
    // console.log(ctx.$axios.defaults.headers.common)
  }
}
