import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Parâmetro 'query' é obrigatório" });
    }

    // 🔮 Exemplo de endpoint LexML (precisa validar endpoint oficial)
    const url = `http://legis.senado.gov.br/dadosabertos/sicon/legislacao?termo=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const text = await response.text();

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
