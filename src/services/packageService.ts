// Package Service - Centralized data management for packages
import umrahPackagesData from '@/data/umrahPackages.json';
import kaabaTawaf from '@/assets/kaaba-tawaf.jpg';
import madinahMosque from '@/assets/madinah-mosque.jpg';
import islamicMinarets from '@/assets/islamic-minarets.jpg';
import muzdalifahNight from '@/assets/muzdalifah-night.jpg';
import kaabaNight from '@/assets/kaaba-night.jpg';
import masjidAlHaramAerial from '@/assets/masjid-al-haram-aerial.jpg';
import muslimScholar1 from '@/assets/muslim-scholar-1.jpg';
import muslimScholar2 from '@/assets/muslim-scholar-2.jpg';
import muslimScholar3 from '@/assets/muslim-scholar-3.jpg';
import muslimScholar4 from '@/assets/muslim-scholar-4.jpg';
import muslimScholar5 from '@/assets/muslim-scholar-5.jpg';

// Type definitions
export interface Package {
  title: string;
  category: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  hotelMakkah: string;
  hotelMadinah: string;
  flightsUp: string;
  flightsDown: string;
  food: string;
  specialServices: string;
  isPopular?: boolean;
}

export interface UmrahPackageDetails {
  hotelMakkah: string;
  hotelMadinah: string;
  flightsUp: string;
  flightsDown: string;
  food: string;
  specialServices: string;
}

export interface UmrahPackage {
  id: string;
  title: string;
  badge: {
    text: string;
    color: string;
  };
  image: string;
  price: string;
  packages: Array<{
    name: string;
    duration: string;
  }>;
  details: UmrahPackageDetails;
  buttonText: string;
  rating: number;
  reviews: number;
}

export interface Consultant {
  name: string;
  title: string;
  department: string;
  image: string;
}

export interface KeyHighlight {
  number: string;
  title: string;
  subtitle: string;
}

export interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  platform: string;
  avatar: string;
}

// Service class for package-related data
class PackageService {
  
  // Helper function to map image names to actual imported images
  private getImageSrc(imageName: string): string {
    const imageMap: { [key: string]: string } = {
      'kaaba-tawaf': kaabaTawaf,
      'madinah-mosque': madinahMosque,
      'islamic-minarets': islamicMinarets,
      'muzdalifah-night': muzdalifahNight,
      'kaaba-night': kaabaNight,
      'masjid-al-haram-aerial': masjidAlHaramAerial,
      'muslim-scholar-1': muslimScholar1,
      'muslim-scholar-2': muslimScholar2,
      'muslim-scholar-3': muslimScholar3,
      'muslim-scholar-4': muslimScholar4,
      'muslim-scholar-5': muslimScholar5,
      // Legacy camelCase mappings for backward compatibility
      kaabaTawaf,
      madinahMosque,
      islamicMinarets,
      muzdalifahNight,
      kaabaNight,
      masjidAlHaramAerial,
      muslimScholar1,
      muslimScholar2,
      muslimScholar3,
      muslimScholar4,
      muslimScholar5
    };
    return imageMap[imageName] || kaabaTawaf;
  }
  
  // Get Hajj packages (currently hardcoded, will be replaced with API calls)
  async getHajjPackages(): Promise<Package[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return [
      {
        title: "Super Saver - Shifting",
        category: "Super Saver - Shifting",
        price: "৳5,80,000",
        duration: "35-40 Days",
        rating: 4.99,
        reviews: 109,
        image: this.getImageSrc("kaabaTawaf"),
        hotelMakkah: "Hotel Ainan Maluq Al-Omari/Equivalent Hotel | Distance 600-700m.",
        hotelMadinah: "Mar'azza in Madinah/Similar Hotel | Distance 300-400m",
        flightsUp: "Direct - SV/BG",
        flightsDown: "Direct - SV/BG",
        food: "Breakfast, Lunch & dinner",
        specialServices: "Ziyara + Guide + Dae + Workshop"
      },
      {
        title: "Economy - Non Shifting", 
        category: "Economy - Non Shifting",
        price: "৳6,50,000",
        duration: "35-40 Days",
        rating: 4.99,
        reviews: 109,
        image: this.getImageSrc("madinahMosque"),
        hotelMakkah: "Hotel Adnan Maluq Al-Omari/Equivalent Hotel | Distance 600-700m.",
        hotelMadinah: "Mar'azza in Madinah | Distance 300-400m",
        flightsUp: "Direct - SV/BG",
        flightsDown: "Direct - SV/BG",
        food: "Breakfast, Lunch & dinner",
        specialServices: "Ziyara + Guide + Dae + Workshop",
        isPopular: true
      },
      {
        title: "Standard - Non Shifting",
        category: "Standard - Non Shifting", 
        price: "Starts from ৳7,50,000",
        duration: "30-36 Days",
        rating: 4.99,
        reviews: 109,
        image: this.getImageSrc("islamicMinarets"),
        hotelMakkah: "Three Star Hotel | Distance 300-400m",
        hotelMadinah: "Three Star Hotel | Distance 200-300m",
        flightsUp: "Direct - SV/BG",
        flightsDown: "Direct - SV/BG", 
        food: "Breakfast, Lunch & dinner",
        specialServices: "Ziyara + Guide + Dae + Workshop"
      },
      {
        title: "Premium - Shifting",
        category: "Premium - Shifting", 
        price: "৳8,50,000",
        duration: "20-25 Days",
        rating: 4.99,
        reviews: 109,
        image: this.getImageSrc("muzdalifahNight"),
        hotelMakkah: "Five Star Hotel | Distance 0-150m.",
        hotelMadinah: "Five Star Hotel | Distance 0-150m",
        flightsUp: "Direct - SV/BG",
        flightsDown: "Direct - SV/BG", 
        food: "Breakfast, Lunch & dinner",
        specialServices: "Ziyara + Guide + Dae + Workshop"
      },
      {
        title: "Luxury Non-Shifting",
        category: "Luxury Non-Shifting", 
        price: "৳13,50,000",
        duration: "18-21 Days",
        rating: 4.99,
        reviews: 109,
        image: this.getImageSrc("kaabaNight"),
        hotelMakkah: "The Clock Towers | Distance 0m.",
        hotelMadinah: "Anwar Al Madinah Movenpick/Similar Five star | Distance 0m.",
        flightsUp: "Direct - SV/BG",
        flightsDown: "Direct - SV/BG", 
        food: "Buffet Breakfast, Lunch, Evening Snacks & Dinner",
        specialServices: "Special Train, Ziyara + Guide + Dae"
      },
      {
        title: "VIP - Non Shifting",
        category: "VIP - Non Shifting", 
        price: "৳11,60,000",
        duration: "18-21 Days",
        rating: 4.99,
        reviews: 109,
        image: this.getImageSrc("masjidAlHaramAerial"),
        hotelMakkah: "Swissotel Al Maqam Makkah/Equivalent Hotel | Distance 0-150m.",
        hotelMadinah: "Anwar Al Madinah Movenpick/Equivalent Hotel | Distance 0-150m",
        flightsUp: "Direct - SV/BG",
        flightsDown: "Direct - SV/BG", 
        food: "Buffet Breakfast, Lunch, Evening Snacks & Dinner",
        specialServices: "Special Train, Ziyara + Guide + Dae"
      }
    ];
  }

  // Get Umrah packages from JSON data
  async getUmrahPackages(): Promise<UmrahPackage[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Process the JSON data to map image names to actual imported images
    const processedPackages = umrahPackagesData.availableUmrahPackages.map(pkg => ({
      ...pkg,
      image: this.getImageSrc(pkg.image)
    }));
    
    return processedPackages;
  }

  // Get consultants data
  async getConsultants(): Promise<Consultant[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return [
      {
        name: "Dr. Muhammad Tazammol Hoque",
        title: "Associate Professor",
        department: "Dept. of Islamic Studies, Jagannath University",
        image: this.getImageSrc("muslimScholar1")
      },
      {
        name: "Dr. Muhammad Saleh Uddin", 
        title: "Associate Professor",
        department: "Dept. of Islamic Studies, Jagannath University", 
        image: this.getImageSrc("muslimScholar2")
      },
      {
        name: "Dr. Muhammad Ahsan Ullah",
        title: "Associate Professor", 
        department: "Dept. of Islamic Studies, Jagannath University",
        image: this.getImageSrc("muslimScholar3")
      },
      {
        name: "Tareque Bin Atique",
        title: "Associate Professor",
        department: "Dept. of Islamic Studies, Jagannath University",
        image: this.getImageSrc("muslimScholar4")
      },
      {
        name: "Shaikh Mijanur Rahman",
        title: "B.A (hons), M.A (DU) Imam & Khatib", 
        department: "Ashford Mosque, England",
        image: this.getImageSrc("muslimScholar5")
      }
    ];
  }

  // Get key highlights data
  async getKeyHighlights(): Promise<KeyHighlight[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return [
      { number: "120+", title: "Umrah packages", subtitle: "Provided in last 2 year" },
      { number: "1000+", title: "Customers", subtitle: "We served" },  
      { number: "20+", title: "Consultants", subtitle: "Worldwide" }
    ];
  }

  // Get testimonials data
  async getTestimonials(): Promise<Testimonial[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return [
      {
        id: 1,
        name: "Monir Hossain Noyon",
        date: "August, 2022",
        rating: 5,
        review: "One of the best service. They are very well organized and friendly. Highly recommend for anyone planning their Hajj or Umrah journey. The team was professional and took care of everything.",
        platform: "Google",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      },
      {
        id: 2,
        name: "Fatima Ahmed",
        date: "September, 2022",
        rating: 5,
        review: "Excellent service from start to finish. The accommodation was perfect, very close to Haram. The guides were knowledgeable and helpful throughout the journey. Alhamdulillah, it was a blessed experience.",
        platform: "Facebook",
        avatar: "https://images.unsplash.com/photo-1755278338891-e8d8481ff087?w=100&h=100&fit=crop"
      },
      {
        id: 3,
        name: "Abdul Rahman Khan",
        date: "October, 2022",
        rating: 5,
        review: "Amazing experience with InSha Hajj & Umrah Group. The package was value for money and everything was well organized. The team helped us with visa processing and provided excellent guidance.",
        platform: "Google",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
      },
      {
        id: 4,
        name: "Khadija Begum",
        date: "November, 2022",
        rating: 5,
        review: "SubhanAllah! What a wonderful journey it was. InSha team made our Umrah very comfortable and hassle-free. The hotels were excellent and the food arrangements were perfect. May Allah bless them.",
        platform: "TripAdvisor",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
      }
    ];
  }

  // Get service areas data
  async getServiceAreas(): Promise<string[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return [
      // Dhaka Division
      "Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", 
      "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail",
      
      // Chittagong Division  
      "Chittagong", "Bandarban", "Brahmanbaria", "Chandpur", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", 
      "Lakshmipur", "Noakhali", "Rangamati",
      
      // Rajshahi Division
      "Rajshahi", "Bogura", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Sirajganj",
      
      // Khulna Division
      "Khulna", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", 
      "Narail", "Satkhira",
      
      // Barishal Division
      "Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur",
      
      // Sylhet Division
      "Sylhet", "Habiganj", "Moulvibazar", "Sunamganj",
      
      // Rangpur Division
      "Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon",
      
      // Mymensingh Division
      "Mymensingh", "Jamalpur", "Netrokona", "Sherpur"
    ];
  }
}

// Export singleton instance
export const packageService = new PackageService();