import api from '~/api/api'

export default function (ctx, inject) {
  if (!ctx.$axios) {
    console.error('Axios n\'est pas installé')
  } else {
    api.$axios = ctx.$axios
    inject('api', api)
  }
}
