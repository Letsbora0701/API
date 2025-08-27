# API DataJud CNJ

Proxy para a API pública do DataJud (CNJ).  
Permite buscar processos e jurisprudência em JSON.

## Endpoints

- `/api/status` → Healthcheck  
- `/api/datajud?tribunal=TJSP` → Busca processos por tribunal  
- `/api/datajud?classe=100` → Busca por classe processual  
- `/api/datajud?assunto=Improbidade Administrativa` → Busca por assunto  

## Fonte Oficial
Documentação da API pública: [DataJud CNJ](https://datajud-wiki.cnj.jus.br/api-publica/)
