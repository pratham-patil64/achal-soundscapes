// src/components/ServiceModal.tsx

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast"; // Import the toast hook
import { Send } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

const ServiceModal = ({ isOpen, onClose, serviceTitle }: ServiceModalProps) => {
  const FORM_ENDPOINT = "https://formsubmit.co/team.achalpednekar@gmail.com"; // !! Replace with your email
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // This stops the form from submitting and closing the modal
    setIsLoading(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // This is key
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Service Inquiry: ${serviceTitle}`,
          _captcha: "false",
          "Service Inquiry": serviceTitle, // Add the service title to the email body
        }),
      });

      if (response.ok) {
        toast({
          title: "Inquiry Sent!",
          description: "Your message has been sent. I'll get back to you soon!",
        });
        // Reset form and close modal
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // We need to handle the modal's open/close state separately
  const handleOpenChange = (open: boolean) => {
    if (!isLoading) {
      onClose();
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form on close
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-foreground">Get a Quote for {serviceTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with a personalized quote.
          </DialogDescription>
        </DialogHeader>
        
        {/* Use onSubmit and remove action/method */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required 
                     value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required
                     value={formData.email} onChange={handleInputChange} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" 
                   value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your project..." required
                      value={formData.message} onChange={handleInputChange} />
          </div>
          
          {/* Hidden inputs are no longer needed here */}
          
          <DialogFooter className="!flex-col sm:!flex-col gap-2">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                    disabled={isLoading}>
              {isLoading ? 'Sending...' : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Inquiry
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;