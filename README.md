# Train data

## Comands
To run the application:
```console
npm run dev
```

To run tests:
```console
npm run test
```

## API
The API used is Renfe API. You can read [the documentation here](https://data.renfe.com/api/1/util/snippet/api_info.html?resource_id=a2368cff-1562-4dde-8466-9635ea3a572a)

## Technologies
- NextJs: Library used for the whole application
- Typescript: For logic
- Tailwind: For styling
- Jest & testing library: for testing

## Decissions
- Architecture & Scalability: I've implemented a layered architecture to ensure clear separation of concerns, significantly boosting scalability and readability.
- Accessibility: I've prioritized accessibility using semantic HTML and appropriate ARIA labels for broader usability.
- Version Control: The project is managed on the main branch for simplicity, with commits highlighting key features and milestones.
- Code Consistency: All interface properties and component props are organized alphabetically to maintain high code quality and consistency.

## Architecture
<pre>
src/
├── app/                     # Pages
│   └── notices              # Notice page
├── application/             # Use cases
├── components/              # Reusable components
├── data/                    # Functions that call endpoints
├── domain/                  # Domain types and rules
├── public/                  # Assets, for example, images
</pre>

## TODO

- Add more tests
- Improve format and standarize it
- Use branches for each feature