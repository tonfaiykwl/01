# ChatSnooker — Snooker Coach Engine

A new isolated coaching module for escape practice and shot analysis.

## Route
- /coach

## Core
- Interactive SVG 12ft table
- Draggable cue, reds and colors
- 1–6 cushion selection
- Reflection-based escape path generation
- Collision checks
- Best path + ghost ball + bounce markers
- Practice generator controls
- AI Coach metrics panel

## Architecture
The deterministic solver lives under `modules/coach` and is intentionally UI-independent so future spin physics and replay layers can be added without coupling to Match / Money Tracker.

## Existing app
The original root tracker page remains unchanged.