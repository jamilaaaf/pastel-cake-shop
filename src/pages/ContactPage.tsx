import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto bg-pink-50">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-pink-800">Contactez-nous</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Votre email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Votre message" />
            </div>
            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">Envoyer</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;