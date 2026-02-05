# 00_inputs — Upstream Inputs

## Purpose
Define the upstream inputs that drive all design and implementation decisions.

## Inputs (assumed unless stated)
- **Product goal**: A simple ToDo app demonstrating best-practice monolith structure.
- **Users**: Small teams or individuals.
- **Traffic**: Low to moderate (single-region).
- **Data**: A few million tasks maximum.
- **Time-to-market**: Fast iteration > long-term optimization.
- **Team**: 1–3 developers.
- **Non-goal**: Microservices or distributed architecture.

## Constraints
- Single deployable application
- Single relational database
- Minimal operational complexity

## Open questions (if any)
- None. Proceed with defaults above.
