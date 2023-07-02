const { calculateInterest, formatCurrency } = require('./helper.test');

describe('Helper Functions', () => {
    test('Calculate interest correctly', () => {
        // Arrange: Set up the initial state
        const principal = 1000;
        const rate = 0.05;
        const time = 2;

        // Act: Perform the action being tested
        const interest = calculateInterest(principal, rate, time);

        // Assert: Check the expected outcome
        expect(interest).toBe(100);
    });

    test('Format currency correctly', () => {
        // Arrange: Set up the initial state
        const amount = 5000;

        // Act: Perform the action being tested
        const formattedAmount = formatCurrency(amount);

        // Assert: Check the expected outcome
        expect(formattedAmount).toBe('$5,000.00');
    });
});
