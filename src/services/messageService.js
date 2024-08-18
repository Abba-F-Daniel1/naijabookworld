const simulateNetworkDelay = () => new Promise(resolve => setTimeout(resolve, 1000));

export const sendConfirmationMessage = async (email, orderDetails) => {
  try {
    await simulateNetworkDelay();

    // Simulate a 10% chance of network error
    if (Math.random() < 0.1) {
      throw new Error('Network error');
    }

    console.log('Sending confirmation message to:', email);
    console.log('Order details:', orderDetails);

    // Practical purpose, i'll just return a success message
    return {
      success: true,
      message: `Confirmation sent to ${email}`,
    };
  } catch (error) {
    console.error('Error sending confirmation message:', error);
    throw error;
  }
};