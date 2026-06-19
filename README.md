# VocabMaster Pro

Interaktiver Business-English Vokabel-Trainer mit 266 Vokabeln, Spaced Repetition und persistentem Tracking.

## Features

- **266 Vokabeln** aus 12 Kategorien (IT, Geschäftsprozesse, Büro, Finanzen, KI-Richtlinien, etc.)
- **Active Recall** - Antwort eingeben, dann erst Lösung einblenden
- **Fuzzy Matching** - Tippfehler (bis 2 Buchstaben) werden akzeptiert
- **Spaced Repetition** - Schwache Vokabeln werden priorisiert
- **3 Richtungsmodi** - DE→EN, EN→DE, Gemischt
- **4 Lernmodi** - Smart, Zufällig, Nur schwache, Alle
- **Persistente Datenbank** - IndexedDB + localStorage + JSON-Datei Export
- **Dashboard** mit Kategorie-Stats und Genauigkeits-Analyse
- **Lernverlauf** mit Zeitstempel pro Eingabe
- **Confetti** bei richtigen Antworten
- **Keyboard Shortcuts** - Enter = Prüfen, Leertaste = Weiter

## Starten

```bash
# Einfach index.html im Browser öffnen
start index.html
```

Kein Server, keine Dependencies - läuft direkt im Browser.

## Fortschritt speichern

Klicke auf den 💾-Button in der Navigation. Wenn dein Browser die **File System Access API** unterstützt (Chrome/Edge), wird eine Datei ausgeählt die automatisch aktualisiert wird. Alternativ wird eine JSON-Datei heruntergeladen die du beim nächsten Start importieren kannst.

## Tech Stack

- Vanilla HTML/CSS/JS (kein Framework)
- IndexedDB für persistente Speicherung
- File System Access API für direkte Dateizugriffe
- CSS Custom Properties + Glassmorphism Design
- SVG Progress Ring mit Gradient

## Lizenz

Privates Lernprojekt.
