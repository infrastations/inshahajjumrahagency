# Services Directory

This directory contains service classes that centralize data management and API calls for the InSha Hajj & Umrah application.

## Structure

### `packageService.ts`
Handles all package-related data operations:
- **getHajjPackages()**: Fetches Hajj package data
- **getUmrahPackages()**: Fetches Umrah package data  
- **getConsultants()**: Fetches consultant information
- **getKeyHighlights()**: Fetches key statistics/highlights
- **getTestimonials()**: Fetches customer testimonials
- **getServiceAreas()**: Fetches list of service areas

### `contactService.ts` 
Handles all contact form and submission operations:
- **getContactSubmissions()**: Fetches all contact submissions
- **getContactSubmissionById(id)**: Fetches a specific submission
- **submitContactForm(data)**: Submits new contact form
- **updateContactSubmissionStatus(id, status)**: Updates submission status
- **getContactSubmissionsByStatus(status)**: Filters submissions by status
- **searchContactSubmissions(term)**: Searches submissions
- **getSubmissionStatistics()**: Gets submission statistics
- **exportSubmissionsToCSV()**: Exports data to CSV format

### `index.ts`
Central export point for all services and type definitions.

## Usage

```typescript
import { packageService, contactService } from '@/services';
import type { Package, ContactSubmission } from '@/services';

// Load packages
const packages = await packageService.getHajjPackages();

// Submit contact form
const submission = await contactService.submitContactForm(formData);
```

## Migration Benefits

1. **Centralized Data Management**: All data operations are centralized in service classes
2. **Easy Database Integration**: Services can be easily modified to use real API endpoints
3. **Type Safety**: All data structures are properly typed with TypeScript
4. **Reusability**: Services can be used across multiple components
5. **Maintainability**: Changes to data structure only need to be made in one place
6. **Testing**: Services can be easily mocked for unit testing

## Future Enhancements

- Add authentication service
- Add booking/payment services  
- Add user management service
- Add API error handling and retry logic
- Add caching layer for better performance