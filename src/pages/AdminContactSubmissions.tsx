import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import { ArrowLeft, Search, Download, Eye, Phone, Mail, Calendar, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { contactService } from "@/services";
import type { ContactSubmission } from "@/services";

const AdminContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [statistics, setStatistics] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    completed: 0
  });

  // Load data from service on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [submissionsData, statsData] = await Promise.all([
          contactService.getContactSubmissions(),
          contactService.getSubmissionStatistics()
        ]);
        setSubmissions(submissionsData);
        setStatistics(statsData);
      } catch (error) {
        console.error('Error loading submissions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter submissions based on search term and status
  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = 
      submission.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.phoneNumber.includes(searchTerm);
    
    const matchesStatus = statusFilter === "all" || submission.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-600 text-white">New</Badge>;
      case 'contacted':
        return <Badge className="bg-yellow-600 text-white">Contacted</Badge>;
      case 'completed':
        return <Badge className="bg-green-600 text-white">Completed</Badge>;
      default:
        return <Badge className="bg-gray-600 text-white">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleExportData = async () => {
    try {
      const csvContent = await contactService.exportSubmissionsToCSV();
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  const statusCounts = statistics;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-golden transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="mb-12">
            <h1 className="font-display text-5xl font-bold text-white mb-6">
              InSha Admin - Contact Form Submissions
            </h1>
            <p className="font-body text-lg text-white/80 max-w-4xl leading-relaxed">
              Manage and review all contact form submissions from potential customers. Track inquiries, follow up on leads, and maintain customer communication records.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-golden mb-2">{statusCounts?.total || 0}</div>
                <div className="text-white/80 font-body">Total Submissions</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{statusCounts?.new || 0}</div>
                <div className="text-white/80 font-body">New Inquiries</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{statusCounts?.contacted || 0}</div>
                <div className="text-white/80 font-body">Contacted</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{statusCounts?.completed || 0}</div>
                <div className="text-white/80 font-body">Completed</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="font-display text-xl text-white flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters & Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                    <Input
                      placeholder="Search by name, email, or phone..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-golden"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full md:w-[180px] bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={handleExportData}
                  className="bg-golden hover:bg-golden-dark text-sapphire font-body font-semibold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
              <div className="mt-4 text-white/70 font-body text-sm">
                Showing {filteredSubmissions?.length || 0} of {submissions?.length || 0} submissions
              </div>
            </CardContent>
          </Card>

          {/* Submissions Table */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="font-display text-xl text-white">
                Contact Form Submissions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/20">
                      <TableHead className="text-white font-body font-semibold">ID</TableHead>
                      <TableHead className="text-white font-body font-semibold">Full Name</TableHead>
                      <TableHead className="text-white font-body font-semibold">Contact Info</TableHead>
                      <TableHead className="text-white font-body font-semibold">Comments</TableHead>
                      <TableHead className="text-white font-body font-semibold">Submitted</TableHead>
                      <TableHead className="text-white font-body font-semibold">Status</TableHead>
                      <TableHead className="text-white font-body font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubmissions && filteredSubmissions.length > 0 ? filteredSubmissions.map((submission) => (
                      <TableRow key={submission?.id} className="border-white/20 hover:bg-white/5">
                        <TableCell className="text-white font-body">{submission?.id || 'N/A'}</TableCell>
                        <TableCell className="text-white font-body font-semibold">
                          {submission?.fullName || 'Unknown'}
                        </TableCell>
                        <TableCell className="text-white/80 font-body">
                          <div className="space-y-1">
                            <div className="flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              <span className="text-xs">{submission?.phoneNumber || 'N/A'}</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              <span className="text-xs">{submission?.emailAddress || 'N/A'}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-white/80 font-body max-w-xs">
                          <div className="truncate">
                            {submission?.comments || "No comments provided"}
                          </div>
                        </TableCell>
                        <TableCell className="text-white/80 font-body">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="text-xs">{submission?.submittedAt ? formatDate(submission.submittedAt) : 'N/A'}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(submission?.status || 'new')}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedSubmission(submission)}
                            className="text-golden hover:text-golden-dark hover:bg-white/10"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    )) : (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-12">
                          <div className="text-white/60 font-body text-lg">
                            {isLoading ? 'Loading submissions...' : 'No submissions found'}
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {filteredSubmissions && filteredSubmissions.length === 0 && !isLoading && (
                <div className="text-center py-12">
                  <div className="text-white/60 font-body text-lg mb-4">
                    No submissions found matching your criteria
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setSearchTerm("");
                      setStatusFilter("all");
                    }}
                    className="text-golden hover:text-golden-dark hover:bg-white/10"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submission Detail Modal/Card */}
          {selectedSubmission && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <Card className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <CardHeader>
                  <CardTitle className="font-display text-xl text-sapphire flex items-center justify-between">
                    Submission Details - #{selectedSubmission?.id || 'N/A'}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedSubmission(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <label className="font-semibold text-gray-700">Full Name:</label>
                    <p className="text-gray-600">{selectedSubmission?.fullName || 'N/A'}</p>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">Phone Number:</label>
                    <p className="text-gray-600">{selectedSubmission?.phoneNumber || 'N/A'}</p>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">Email Address:</label>
                    <p className="text-gray-600">{selectedSubmission?.emailAddress || 'N/A'}</p>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">Comments:</label>
                    <p className="text-gray-600 whitespace-pre-wrap">
                      {selectedSubmission?.comments || "No comments provided"}
                    </p>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">Submitted At:</label>
                    <p className="text-gray-600">{selectedSubmission?.submittedAt ? formatDate(selectedSubmission.submittedAt) : 'N/A'}</p>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">Status:</label>
                    <div className="mt-1">
                      {getStatusBadge(selectedSubmission?.status || 'new')}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button 
                      className="bg-jade hover:bg-jade-dark text-white"
                      onClick={() => selectedSubmission?.phoneNumber && window.open(`tel:${selectedSubmission.phoneNumber}`)}
                      disabled={!selectedSubmission?.phoneNumber}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button 
                      className="bg-golden hover:bg-golden-dark text-sapphire"
                      onClick={() => selectedSubmission?.emailAddress && window.open(`mailto:${selectedSubmission.emailAddress}`)}
                      disabled={!selectedSubmission?.emailAddress}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <SectionSeparator />
      <Footer />
    </div>
  );
};

export default AdminContactSubmissions;