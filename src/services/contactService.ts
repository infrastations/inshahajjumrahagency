// Contact Service - Centralized data management for contact form submissions
import contactSubmissionsData from '@/data/contactSubmissions.json';

// Type definitions
export interface ContactSubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  comments: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'completed';
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  comments: string;
}

// Service class for contact-related operations
class ContactService {
  
  // Get all contact submissions
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return contactSubmissionsData.submissions as ContactSubmission[];
  }

  // Get contact submission by ID
  async getContactSubmissionById(id: string): Promise<ContactSubmission | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const submissions = contactSubmissionsData.submissions as ContactSubmission[];
    return submissions.find(submission => submission.id === id) || null;
  }

  // Submit new contact form (simulate API call)
  async submitContactForm(formData: ContactFormData): Promise<ContactSubmission> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const newSubmission: ContactSubmission = {
      id: Date.now().toString(),
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };
    
    // In a real application, this would be sent to the backend
    console.log('Contact form submitted:', newSubmission);
    
    return newSubmission;
  }

  // Update contact submission status
  async updateContactSubmissionStatus(id: string, status: ContactSubmission['status']): Promise<ContactSubmission | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // In a real application, this would update the database
    const submissions = contactSubmissionsData.submissions as ContactSubmission[];
    const submission = submissions.find(s => s.id === id);
    
    if (submission) {
      submission.status = status;
      console.log(`Contact submission ${id} status updated to ${status}`);
      return submission;
    }
    
    return null;
  }

  // Get contact submissions by status
  async getContactSubmissionsByStatus(status: ContactSubmission['status']): Promise<ContactSubmission[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const submissions = contactSubmissionsData.submissions as ContactSubmission[];
    return submissions.filter(submission => submission.status === status);
  }

  // Search contact submissions
  async searchContactSubmissions(searchTerm: string): Promise<ContactSubmission[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const submissions = contactSubmissionsData.submissions as ContactSubmission[];
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    return submissions.filter(submission => 
      submission.fullName.toLowerCase().includes(lowerSearchTerm) ||
      submission.emailAddress.toLowerCase().includes(lowerSearchTerm) ||
      submission.phoneNumber.includes(searchTerm)
    );
  }

  // Get submission statistics
  async getSubmissionStatistics(): Promise<{
    total: number;
    new: number;
    contacted: number;
    completed: number;
  }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const submissions = contactSubmissionsData.submissions as ContactSubmission[];
    
    return {
      total: submissions.length,
      new: submissions.filter(s => s.status === 'new').length,
      contacted: submissions.filter(s => s.status === 'contacted').length,
      completed: submissions.filter(s => s.status === 'completed').length
    };
  }

  // Export submissions to CSV format
  async exportSubmissionsToCSV(): Promise<string> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const submissions = contactSubmissionsData.submissions as ContactSubmission[];
    
    const csvContent = [
      ['ID', 'Full Name', 'Phone', 'Email', 'Comments', 'Submitted At', 'Status'],
      ...submissions.map(sub => [
        sub.id,
        sub.fullName,
        sub.phoneNumber,
        sub.emailAddress,
        sub.comments.replace(/,/g, ';'), // Replace commas to avoid CSV issues
        new Date(sub.submittedAt).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        sub.status
      ])
    ].map(row => row.join(',')).join('\\n');
    
    return csvContent;
  }
}

// Export singleton instance
export const contactService = new ContactService();