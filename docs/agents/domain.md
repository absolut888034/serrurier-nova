# Domain Docs

Comment les skills d'ingénierie consomment la documentation domaine de ce projet.

## Avant d'explorer, lire ces fichiers

- **`CLAUDE.md`** à la racine — source de vérité du projet (équivalent de `CONTEXT.md` dans la convention Matt Pocock)
- **`docs/ARCHITECTURE.md`** — map du site, plantillas, schéma SEO
- **`docs/DESIGN-SYSTEM.md`** — tokens, typographie, composants UI
- **`docs/CONTENT.md`** — copy des services, communes, FAQ, blog

Si un de ces fichiers manque, **proceed silently**. Don't flag son absence ; don't suggérer de le créer à l'avance.

## Layout

Single-context repo. Toutes les décisions et le vocabulaire vivent dans `CLAUDE.md` + `docs/*.md`. Pas d'ADRs séparés pour le moment — si une décision archi importante émerge, on créera `docs/adr/0001-<slug>.md`.

```
/
├── CLAUDE.md              ← contexte projet (source de vérité)
├── README.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DESIGN-SYSTEM.md
│   ├── CONTENT.md
│   └── agents/            ← config pour skills Matt Pocock
│       ├── issue-tracker.md
│       ├── triage-labels.md
│       └── domain.md
└── src/ (app, components, content, lib)
```

## Utilise le vocabulaire du glossaire

Quand ton output nomme un concept domaine (titre d'issue, proposition de refactor, hypothèse, nom de test), utilise le terme tel que défini dans `CLAUDE.md`. Pas de drift vers synonymes que le glossaire évite explicitement.

Vocabulaire clé de ce projet :
- **comuna** / **commune** — l'une des 45 communes du canton de Genève
- **zone desservie** — commune couverte par le service
- **délai** — temps moyen d'intervention depuis Vernier (en minutes)
- **prestation** / **service** — un des 10 services (ouverture, changement, etc.)
- **base** — l'atelier à Châtelaine, Vernier (référence centrale)

## Pas d'ADRs encore

Si l'output contredit une décision documentée dans `CLAUDE.md`, le signaler explicitement plutôt que de la remplacer silencieusement.
