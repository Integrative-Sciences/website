# Paper Submission and Evaluation Process

This diagram illustrates the complete workflow for paper submission and evaluation at the Integrative Science Journal.

``` mermaid
flowchart TD
    A[Author Prepares Manuscript] --> B[Submit Paper via Online Portal]
    B --> B1[AI Preliminary Evaluation]
    B1 --> C{Initial Editorial Check}
    C -->|Pass| D[Assign Editor]
    C -->|Fail| E[Desk Rejection]
    E --> F[Rejection Notice to Author]
    
    D --> G[Editor Reviews Scope & Quality]
    G -->|Accept for Review| H[Select Peer Reviewers]
    G -->|Reject| I[Editorial Rejection]
    I --> F
    
    H --> J[Send to 2-3 Reviewers]
    J --> K[Reviewers Evaluate Paper]
    K --> L[Reviewers Submit Reports]
    
    L --> M{Editorial Decision}
    M -->|Accept| N[Accept for Publication]
    M -->|Minor Revisions| O[Request Minor Revisions]
    M -->|Major Revisions| P[Request Major Revisions]
    M -->|Reject| Q[Rejection with Reviews]
    
    O --> R[Author Revises & Resubmits]
    P --> S[Author Revises & Resubmits]
    R --> T[Editor Reviews Revisions]
    S --> U[Re-review Process]
    
    T -->|Accept| N
    T -->|Further Revisions| O
    T -->|Reject| Q
    
    U --> V[Reviewers Check Revisions]
    V --> W{Final Decision}
    W -->|Accept| N
    W -->|Minor Revisions| O
    W -->|Reject| Q
    
    N --> X[Copy Editing]
    X --> Y[Author Proof Review]
    Y --> Z[Publication]
    
    Q --> F
    F --> AA[Author May Appeal or Resubmit]
```

## Process Overview

The paper submission process consists of several key stages:

1. **Initial Submission**: Authors prepare and submit manuscripts through the online portal
2. **AI Preliminary Evaluation**: Automated assessment for basic quality, formatting, and scope alignment
3. **Editorial Screening**: Human editorial check for scope, format, and quality requirements
4. **Peer Review**: Expert evaluation by 2-3 reviewers in the field
5. **Decision Making**: Editorial decision based on reviewer feedback
6. **Revision Process**: Authors address reviewer comments and resubmit
7. **Publication**: Final editing, proofing, and publication

### Key Decision Points

- **AI Preliminary Evaluation**: Automated screening for basic compliance and quality metrics
- **Initial Editorial Check**: Human review ensures submission meets journal requirements
- **Editorial Review**: Evaluates scope and quality for peer review
- **Peer Review Decision**: Based on reviewer recommendations
- **Final Decision**: After revision review process

### Timeline

- AI preliminary evaluation: 24-48 hours
- Initial editorial decision: 1-2 weeks
- Peer review process: 4-8 weeks
- Revision review: 2-4 weeks
- Copy editing and publication: 2-3 weeks
    

