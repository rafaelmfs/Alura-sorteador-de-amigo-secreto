import { Card } from 'componentes/Card';
import { Footer } from 'componentes/Footer';
import { Form } from 'componentes/Form';
import { ListOfParticipants } from 'componentes/ListOfParticipants';

export const ConfigPage = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Form />
        <ListOfParticipants />
        <Footer />
      </section>
    </Card>
  );
};
