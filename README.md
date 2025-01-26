# Firebase onAuthStateChanged Memory Leak

This repository demonstrates a common error when using Firebase's `onAuthStateChanged` method: forgetting to unsubscribe from the listener. This can lead to memory leaks in your application.

The `firebaseBug.js` file shows the incorrect implementation where the unsubscribe function is not called.  The `firebaseBugSolution.js` demonstrates the correct usage, including cleaning up the listener when it's no longer needed.

**Key takeaway:** Always unsubscribe from Firebase listeners in the appropriate lifecycle method (e.g., `componentWillUnmount` in React, or equivalent cleanup methods in other frameworks).