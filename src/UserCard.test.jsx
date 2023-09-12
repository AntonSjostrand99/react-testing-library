import UserCard from './UserCard'
import { render, screen } from '@testing-library/react'


test("Test UserCard with different props", () => {
    // Testfall 1
    const user1 = {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
    };
  
    const { getByText } = render(<UserCard user={user1} />);
  
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("Email: johndoe@example.com")).toBeInTheDocument();
    expect(getByText("Phone: 123-456-7890")).toBeInTheDocument();
  });



  test("Test that the right amount of User Cards are generated", () => {
    // Skapa en lista med användare
    const users = [
      {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
      },
      {
        name: "Adam Smith",
        email: "adamsmith@example.com",
        phone: "123-456-7890",
      },
      {
        name: "Kelly Evans",
        email: "kellyevans@example.com",
        phone: "123-456-7890",
      },
    ];
  
    const { getAllByText } = render(
      users.map((user, index) => <UserCard key={index} user={user} />)
    );
  
    // Förväntat antal User Cards
    const expectedUserCount = users.length;
  
    // Hitta alla User Cards baserat på deras innehåll
    const userCards = getAllByText(/Email:/);
  
    // Kontrollera att antalet User Cards matchar förväntat antal
    expect(userCards.length).toBe(expectedUserCount);
  });


  test("Test that the right amount of User Cards are generated.", () => {
   
  });

 

  test("  Test that there are no user cards when the user presses the toggle button.", () => {
   
  });


