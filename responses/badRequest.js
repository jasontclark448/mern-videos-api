module.exports = ({ message, details }) => {
  return {
    status: 400,
    message,
    details
  }
}