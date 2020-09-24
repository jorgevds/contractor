import styles from "./workings.module.css";
import Link from "next/link";

const Workings = () => {
  return (
    <section className={styles.container}>
      <h1>Hoe werkt het</h1>
      <h3>Als stielmens</h3>
      <p>Contractor™ is altijd op zoek naar meer talent! </p>
      <p>
        Op zoek naar meer clienteel? Geef ons een seintje op{" "}
        <a href="mailto:business@contractor.be?subject=Aanvraag business">
          business@contractor.be
        </a>
        ! Ons team biedt u zo snel mogelijk antwoord.
      </p>
      <p>
        Alvorens het eerste contact, geef je ons best een aantal gegevens over
        je bedrijf, zoals je naam, je stiel en een aantal sleutelwoorden over je
        service. Onze copywriters gaan met die sleutelwoorden aan de slag om een
        korte biografie te schrijven die je profiel zal ondersteunen op ons
        webplatform. Stuur de email met de woorden "aanvraag business" in het
        onderwerp om uw aanvraag door te filteren. Hoe sneller uw bericht
        gefilterd wordt, hoe sneller wij aan de slag kunnen!
      </p>
      <p>
        Na de eerste email, nemen we spoedig contact met je op. Dan bespreken we
        je prijs en de gemiddelde duur van je stiel. Deze nummers zijn maar
        schattingen, en geven een beeld van de prijs en tijdsduur die gewoonlijk
        zijn voor je business.
      </p>
      <p>
        Waar wacht je nog op?{" "}
        <Link href="/contact">
          <a>Onze DMs</a>
        </Link>{" "}
        zijn open!
      </p>
      <h3>Als klant</h3>
      <p>Op zoek naar een stielmens? Dan ben je bij ons op de juiste plaats!</p>
      <p>
        Ga naar het hoofdmenu en kies de stiel waarnaar je op zoek bent. Scroll
        naar believen tussen de profielen die opkomen.
      </p>
      <p>
        Klik naar believen op de profielen die je interesseren. Wanneer je denkt
        dat je de juiste kandidaat gevonden hebt, klik je op de knop onderaan
        met "neem contact op" erop.
      </p>
      <p>
        Onze interne mailservice brengt je bericht tot bij je match! Van zodra
        je match je bericht ontvangen heeft, is het aan hun om te antwoorden.
        Geen paniek als zij niet onmiddellijk antwoorden! Onze push
        notifications zorgen voor wekelijkse updates, en berichten over
        onbeantwoorde emails.
      </p>
    </section>
  );
};

export default Workings;
