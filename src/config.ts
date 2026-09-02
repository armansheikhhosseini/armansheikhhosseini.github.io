export const siteConfig = {
  name: "Arman Sheikhhosseini",
  title: "Cloud and DevOps Engineer",
  description: "Cloud and DevOps Engineer with 6+ years of experience building, automating, and operating reliable cloud platforms on AWS and Kubernetes.",
  // Short statement used as the hero headline
  tagline: "I design, automate, and operate cloud platforms that scale — and stay up.",
  yearsExperience: "6+",
  accentColor: "#1d4ed8",
  // Public path to your PDF CV (place the file in the `public/` folder)
  cvUrl: "/ARMAN_SHEIKHHOSSEINI_CV.pdf",
  social: {
    email: "arman.sheikhhosseini@gmail.com",
    phone: "+39 379 268 2755",
    location: "Turin, Italy",
    linkedin: "https://www.linkedin.com/in/thearmansh/",
    twitter: "https://x.com/thearmansh",
    telegram: "https://t.me/thearmanssh",
    github: "https://github.com/armansheikhhosseini",
    website: "https://armansheikhhosseini.github.io/",
  },
  aboutMe:
    "Cloud and DevOps Engineer with 6+ years of experience building, automating, and operating reliable cloud platforms. Strong focus on Infrastructure as Code (Terraform, AWS CDK), CI/CD automation, system design, and security-aware operations. Hands-on experience with AWS, Kubernetes, Linux systems, networking, and monitoring. Proven ability to design scalable, highly available architectures, standardize deployments, and cut manual work. M.Sc. Cybersecurity candidate at Politecnico di Torino.",
  // Headline numbers shown under the hero
  highlights: [
    { value: "6+", label: "Years in production" },
    { value: "30+", label: "Microservices on GitOps" },
    { value: "99.9%", label: "Service availability" },
    { value: "70%", label: "Faster provisioning" },
  ],
  // Skills grouped for an editorial two-column layout
  skills: [
    {
      group: "Cloud platforms",
      items: ["AWS", "EKS", "EC2", "VPC", "IAM", "S3", "RDS / Aurora", "Lambda", "API Gateway", "CloudFront", "Route 53", "CloudWatch", "Cognito", "SES", "SNS", "WAF"],
    },
    {
      group: "Infrastructure as Code",
      items: ["Terraform", "AWS CDK", "Modules", "State management", "Workspaces"],
    },
    {
      group: "CI/CD and GitOps",
      items: ["Jenkins", "GitLab CI", "GitHub Actions", "Argo CD", "Helm"],
    },
    {
      group: "Containers and orchestration",
      items: ["Kubernetes", "Amazon EKS", "Docker", "Traefik"],
    },
    {
      group: "Observability",
      items: ["CloudWatch", "Prometheus", "Grafana", "OpenTelemetry"],
    },
    {
      group: "Systems and security",
      items: ["Linux", "Bash", "Python", "IAM / RBAC", "DNS", "TLS", "VPCs", "Firewalls", "WAF"],
    },
  ],
  projects: [
    {
      name: "Go Web App — DevOps Pipeline",
      description:
        "A Go web application demonstrating a complete DevOps pipeline: a multi-stage distroless Docker build, Kubernetes deployment via raw manifests and a Helm chart, and fully automated CI/CD with GitHub Actions.",
      link: "https://github.com/armansheikhhosseini/go-web-app-devopsified",
      skills: ["Go", "Docker", "Kubernetes", "Helm", "GitHub Actions"],
    },
    {
      name: "Kubernetes Zero Trust Blueprint",
      description:
        "A security hardening framework for Kubernetes implementing Zero Trust Architecture and Defense in Depth across an 8-layer model, with OPA Gatekeeper policies, Falco runtime rules, Cilium network policies, and Trivy scanning.",
      link: "https://github.com/armansheikhhosseini/k8s-zero-trust-blueprint",
      skills: ["Kubernetes", "OPA Gatekeeper", "Falco", "Cilium", "Trivy"],
    },
    {
      name: "GitOps with Argo CD",
      description:
        "A complete GitOps workflow for continuous deployment of a Java Spring Boot application on Kubernetes — GitHub Actions builds and pushes images to Docker Hub, and Argo CD keeps the cluster synchronized with the Git repository.",
      link: "https://github.com/armansheikhhosseini/gitops-argocd-kubernetes-demo",
      skills: ["Argo CD", "Kubernetes", "GitOps", "GitHub Actions", "Docker"],
    },
    {
      name: "GNSS/GPS Security Research",
      description:
        "Research into GNSS/GPS security vulnerabilities and spoofing attacks, covering signal authentication, receiver vulnerabilities, and wireless protocol analysis, with supporting tools for GPS measurement and packet capture analysis.",
      link: "https://github.com/armansheikhhosseini/GNSS-GPS-security-and-spoofing",
      skills: ["GNSS/GPS Security", "Wireless Security", "Packet Analysis", "MATLAB"],
    },
  ],
  experience: [
    {
      company: "Arzamed",
      title: "Cloud and DevOps Engineer",
      dateRange: "Mar 2026 — Present",
      location: "Turin, Italy",
      metrics: ["Provisioning −70%", "Manual releases −80%", "Detection time −40%"],
      bullets: [
        "Architected and built a greenfield AWS platform for a healthcare SaaS using Infrastructure as Code (AWS CDK): a multi-account, multi-environment design with a private Amazon EKS cluster, Aurora PostgreSQL, ECR, Secrets Manager, and CloudFront/S3 static sites — cutting environment provisioning time by 70% and eliminating configuration drift",
        "Implemented GitOps continuous delivery for 30+ microservices with Argo CD and Helm, reducing manual release steps by 80% and enabling same-day rollbacks",
        "Set up monitoring and alerting on Amazon CloudWatch (dashboards, metric-based alarms, SNS email/SMS notifications), lowering mean time to detect incidents by 40% and cutting observability costs by 30% through instrumentation tuning",
        "Delivered a public external API from scratch — Amazon API Gateway with VPC-linked routing, token- and key-based authorizers, per-tenant rate limiting, and throttling — opening a new integration channel for third-party partners",
        "Built API-key management and usage-based billing (quota tracking, threshold alert emails, Stripe checkout/webhook integration for plan changes and renewals), enabling a new metered revenue stream",
        "Hardened authentication with Amazon Cognito (enforced MFA, scoped access, IRSA workload identity) and branded Amazon SES email templates for verification and one-time passwords",
        "Provisioned a WAF-protected developer portal on CloudFront/S3 and authored its bilingual (IT/EN) API documentation",
      ],
    },
    {
      company: "Torob",
      title: "DevOps Engineer",
      dateRange: "Nov 2022 — Present",
      location: "Remote",
      metrics: ["Provisioning −60%", "Deploy time −40%", "99.9% availability"],
      bullets: [
        "Designed and operated AWS cloud environments with a strong focus on automation, reliability, and controlled deployments",
        "Implemented Infrastructure as Code using Terraform (modular design, state management, versioning) to provision and manage AWS resources, reducing provisioning time by 60%",
        "Built and maintained CI/CD pipelines (Jenkins, GitLab CI, Git-based workflows), cutting deployment time by 40% and enabling safe rollouts and rollbacks across environments",
        "Standardized deployments across dev/test/prod, eliminating configuration drift and supporting sustained 99.9% service availability",
        "Implemented monitoring and alerting using Prometheus, Grafana, and CloudWatch, reducing mean time to resolution by 25%",
        "Managed Linux systems, networking, TLS certificates, reverse proxies, and access controls",
        "Collaborated closely with development teams in agile environments to improve delivery and platform reliability",
      ],
    },
    {
      company: "KiTalent",
      title: "DevOps Engineer (Part-time)",
      dateRange: "Sep 2025 — Nov 2025",
      location: "Turin, Italy",
      metrics: [],
      bullets: [
        "Designed and operated containerized environments using Docker",
        "Automated environment provisioning and deployment workflows to reduce manual intervention",
        "Implemented ingress and routing using Traefik, including secure access and environment separation",
        "Improved operational stability through health checks, restart policies, and configuration standardization",
      ],
    },
    {
      company: "Shatel",
      title: "Network Operations Center Engineer",
      dateRange: "Jul 2020 — Sep 2022",
      location: "Iran",
      metrics: ["99.9% network uptime", "Downtime −30%"],
      bullets: [
        "Utilized PRTG and Zabbix to monitor network performance, achieving a 95% proactive issue resolution rate before end-user impact",
        "Configured and optimized routers to ensure 99.9% network uptime, enhancing overall service reliability",
        "Employed SolarWinds for in-depth network traffic analysis, identifying and mitigating bottlenecks, leading to a 30% reduction in downtime",
        "Coordinated with cross-functional teams to resolve network incidents promptly, minimizing service disruptions and maintaining customer satisfaction",
        "Maintained comprehensive network documentation and incident reports, ensuring compliance with internal standards and facilitating continuous improvement",
      ],
    },
    {
      company: "Shatel",
      title: "Technical Support Specialist",
      dateRange: "Jun 2018 — Jul 2020",
      location: "Iran",
      metrics: [],
      bullets: [
        "Provided Linux and system-level support for internal and customer-facing platforms",
        "Resolved complex incidents under time pressure while maintaining service quality",
        "Documented recurring issues to improve operational efficiency",
      ],
    },
  ],
  education: [
    {
      school: "Politecnico di Torino",
      degree: "M.Sc. Cybersecurity",
      dateRange: "Sep 2024 — Jul 2026",
      note: "Candidate. Focus on cloud security, infrastructure protection, and DevSecOps practices.",
    },
    {
      school: "Azad University",
      degree: "B.Sc. Computer Software Engineering",
      dateRange: "Sep 2014 — Apr 2018",
      note: "Software development, system design, and computer science fundamentals.",
    },
  ],
  certifications: [
    { name: "AWS Certified DevOps Engineer", issuer: "Amazon Web Services", year: "2023" },
    { name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", year: "2024" },
    { name: "CompTIA Security+", issuer: "CompTIA", year: "2024" },
    { name: "Linux Professional Institute LPIC-2", issuer: "Linux Professional Institute", year: "2022" },
    { name: "Linux Professional Institute LPIC-1", issuer: "Linux Professional Institute", year: "2020" },
    { name: "Cisco Certified Network Associate Security (CCNA)", issuer: "Cisco", year: "2018" },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Italian", level: "Intermediate" },
  ],
};
