module.exports = ({ message, details }) => {
  return {
    status: 401,
    message,
    details
  }
}