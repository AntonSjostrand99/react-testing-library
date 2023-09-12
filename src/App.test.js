import { render, screen , waitFor } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//    const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
//  });


test("Test that the 'Loading..' text is generated", () => {
  // Render komponenten
  const { getByText } = render(<App />);

  // Hitta texten "Loading.." i komponenten
   const loadingText = getByText("Loading..");

   // Verifiera att texten "Loading.." finns i komponenten
  expect(loadingText).toBeInTheDocument();
});







test("Test that the right amount of User Cards are generated", async () => {
  render(<App />);

  // Vänta på att data ska hämtas och komponenten ska renderas
  await waitFor(() => {
    const userCards = getAllByTestId("user-card");
    // Antal användare som du förväntar dig att renderas i App
    const expectedUserCount = 3; // Uppdatera detta värde enligt dina användardata

    // Kontrollera att antalet User Cards matchar förväntat antal
    expect(userCards.length).toBe(expectedUserCount);
  });
});



// test('rTest that the Loading. text is generated', () => {
//   render(<App />);
//   const loadingText = getByText("Loading..");
//   expect(loadingText).toBeInTheDocument();
// });


// test('Test that the text "All users currently hidden" appears when pressing the toggle button.', () => {
//   render(<App />);
//  });



