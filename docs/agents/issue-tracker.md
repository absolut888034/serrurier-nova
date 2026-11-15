# Issue tracker: Local Markdown

Issues, PRDs et specs pour ce projet vivent comme fichiers markdown dans `.scratch/`.

## Conventions

- Une feature par dossier : `.scratch/<feature-slug>/`
- Le PRD est `.scratch/<feature-slug>/PRD.md`
- Issues d'implémentation : `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numérotés depuis `01`
- État de triage : ligne `Status:` près du haut de chaque fichier (voir `triage-labels.md`)
- Commentaires/conversation : append en bas sous une heading `## Comments`

## Quand une skill dit "publish to the issue tracker"

Crée un nouveau fichier sous `.scratch/<feature-slug>/` (le dossier sera créé si nécessaire).

## Quand une skill dit "fetch the relevant ticket"

Lis le fichier au chemin référencé. L'utilisateur passe normalement le chemin ou le numéro de l'issue directement.

## Pourquoi local markdown

Projet solo single-developer sans repo git distant à ce jour. Si on migre à GitHub plus tard, switch vers le template `issue-tracker-github.md`.
