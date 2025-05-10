export default defineEventHandler((event) => {
  const config = useAppConfig()

  if (!config.general.email) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Email not found',
    })
  }

  return sendRedirect(event, `mailto:${config.general.email}`, 308)
})
