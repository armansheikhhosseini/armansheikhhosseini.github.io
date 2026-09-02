export const siteConfig = {
  name: "Arman Sheikhhosseini",
  title: "Cloud and DevOps Engineer",
  description: "Cloud and DevOps Engineer with 6+ years of experience building, automating, and operating reliable cloud platforms on AWS and Kubernetes.",
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
  skills: [
    "AWS Services (EKS, EC2, VPC, IAM, S3, RDS/Aurora, Lambda, API Gateway, CloudFront, Route 53, CloudWatch, Cognito, SES, SNS, WAF)",
    "Infrastructure as Code (Terraform, AWS CDK)",
    "CI/CD & GitOps (Jenkins, GitLab CI, GitHub Actions, Argo CD, Helm)",
    "Container Orchestration (Kubernetes, Amazon EKS, Docker)",
    "System Design (Scalable, Highly Available Architectures)",
    "Scripting Languages (Bash, Python)",
    "Linux Administration & Troubleshooting",
    "Networking & Security Fundamentals (IAM/RBAC, DNS, TLS, VPCs, WAF)",
    "Monitoring & Observability (CloudWatch, Prometheus, Grafana, OpenTelemetry)"
  ],
  projects: [
    {
      name: "AWS Infrastructure as Code",
      description:
        "Comprehensive Terraform modules for provisioning scalable AWS infrastructure including EC2 instances, VPC networks, RDS databases, and S3 storage. Features automated backup strategies and multi-environment deployment pipelines.",
      link: "https://github.com/armansheikhhosseini/aws-terraform-infrastructure",
      skills: ["Terraform", "AWS", "EC2", "VPC", "RDS", "S3", "IAM"],
    },
    {
      name: "Kubernetes DevOps Pipeline",
      description:
        "Complete CI/CD pipeline implementation using Jenkins and Kubernetes for containerized applications. Includes automated testing, security scanning, deployment strategies, and monitoring with Prometheus and Grafana.",
      link: "https://github.com/armansheikhhosseini/k8s-devops-pipeline",
      skills: ["Kubernetes", "Jenkins", "Docker", "Prometheus", "Grafana", "Helm"],
    },
    {
      name: "Network Monitoring Dashboard",
      description:
        "Real-time network monitoring solution using PRTG, Zabbix, and custom Python scripts. Features automated alerting, performance analytics, and comprehensive reporting for network infrastructure management.",
      link: "https://github.com/armansheikhhosseini/network-monitoring",
      skills: ["Python", "PRTG", "Zabbix", "SolarWinds", "Bash", "Grafana"],
    },
    {
      name: "Ansible Configuration Management",
      description:
        "Automated configuration management playbooks for multi-environment server provisioning. Includes security hardening, application deployment, and system maintenance automation across Linux infrastructure.",
      link: "https://github.com/armansheikhhosseini/ansible-automation",
      skills: ["Ansible", "Linux", "Python", "YAML", "Bash", "Configuration Management"],
    },
  ],
  experience: [
    {
      company: "Arzamed",
      title: "Cloud and DevOps Engineer",
      dateRange: "Mar 2026 - Present",
      bullets: [
        "Architected and built a greenfield AWS platform for a healthcare SaaS using Infrastructure as Code (AWS CDK): a multi-account, multi-environment design with a private Amazon EKS cluster, Aurora PostgreSQL, ECR, Secrets Manager, and CloudFront/S3 static sites — cutting environment provisioning time by 70% and eliminating configuration drift",
        "Implemented GitOps continuous delivery for 30+ microservices with Argo CD and Helm, reducing manual release steps by 80% and enabling same-day rollbacks",
        "Set up monitoring and alerting on Amazon CloudWatch (dashboards, metric-based alarms, SNS email/SMS notifications), lowering mean time to detect incidents by 40% and cutting observability costs by 30% through instrumentation tuning",
        "Delivered a public external API from scratch — Amazon API Gateway with VPC-linked routing, token- and key-based authorizers, per-tenant rate limiting, and throttling — opening a new integration channel for third-party partners",
        "Built API-key management and usage-based billing (quota tracking, threshold alert emails, Stripe checkout/webhook integration for plan changes and renewals), enabling a new metered revenue stream",
        "Hardened authentication with Amazon Cognito (enforced MFA, scoped access, IRSA workload identity) and branded Amazon SES email templates for verification and one-time passwords",
        "Provisioned a WAF-protected developer portal on CloudFront/S3 and authored its bilingual (IT/EN) API documentation"
      ],
    },
    {
      company: "Torob",
      title: "DevOps Engineer",
      dateRange: "Nov 2022 - Present",
      bullets: [
        "Designed and operated AWS cloud environments with a strong focus on automation, reliability, and controlled deployments",
        "Implemented Infrastructure as Code using Terraform (modular design, state management, versioning) to provision and manage AWS resources, reducing provisioning time by 60%",
        "Built and maintained CI/CD pipelines (Jenkins, GitLab CI, Git-based workflows), cutting deployment time by 40% and enabling safe rollouts and rollbacks across environments",
        "Standardized deployments across dev/test/prod, eliminating configuration drift and supporting sustained 99.9% service availability",
        "Implemented monitoring and alerting using Prometheus, Grafana, and CloudWatch, reducing mean time to resolution by 25%",
        "Managed Linux systems, networking, TLS certificates, reverse proxies, and access controls",
        "Collaborated closely with development teams in agile environments to improve delivery and platform reliability"
      ],
    },
    {
      company: "KiTalent",
      title: "DevOps Engineer (Part-time)",
      dateRange: "Sep 2025 - Nov 2025",
      bullets: [
        "Designed and operated containerized environments using Docker",
        "Automated environment provisioning and deployment workflows to reduce manual intervention",
        "Implemented ingress and routing using Traefik, including secure access and environment separation",
        "Improved operational stability through health checks, restart policies, and configuration standardization"
      ],
    },
    {
      company: "Shatel",
      title: "Network Operations Center Engineer",
      dateRange: "Jul 2020 - Sep 2022",
      bullets: [
        "Utilized PRTG and Zabbix to monitor network performance, achieving a 95% proactive issue resolution rate before end-user impact",
        "Configured and optimized routers to ensure 99.9% network uptime, enhancing overall service reliability",
        "Employed SolarWinds for in-depth network traffic analysis, identifying and mitigating bottlenecks, leading to a 30% reduction in downtime",
        "Coordinated with cross-functional teams to resolve network incidents promptly, minimizing service disruptions and maintaining customer satisfaction",
        "Maintained comprehensive network documentation and incident reports, ensuring compliance with internal standards and facilitating continuous improvement"
      ],
    },
    {
      company: "Shatel",
      title: "Technical Support Specialist",
      dateRange: "Jun 2018 - Jul 2020",
      bullets: [
        "Provided Linux and system-level support for internal and customer-facing platforms",
        "Resolved complex incidents under time pressure while maintaining service quality",
        "Documented recurring issues to improve operational efficiency"
      ],
    },
  ],
  education: [
    {
      school: "Politecnico di Torino",
      degree: "Master's in Cybersecurity",
      dateRange: "Sep 2024 - Jul 2026",
      achievements: [
        "Currently pursuing advanced studies in cybersecurity",
        "Focus on cloud security and infrastructure protection",
        "Research in DevSecOps practices and automation"
      ],
    },
    {
      school: "Azad University",
      degree: "Bachelor of Computer Software Engineering",
      dateRange: "Sep 2014 - Apr 2018",
      achievements: [
        "Specialized in software development and system design",
        "Strong foundation in computer science fundamentals",
        "Capstone project in distributed systems"
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified DevOps Engineer",
      issuer: "Amazon Web Services",
      category: "Cloud & DevOps",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      category: "Container Orchestration",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      category: "Cybersecurity",
    },
    {
      name: "Linux Professional Institute LPIC-2",
      issuer: "Linux Professional Institute",
      category: "Advanced Linux",
    },
    {
      name: "Linux Professional Institute LPIC-1",
      issuer: "Linux Professional Institute",
      category: "Linux Administration",
    },
    {
      name: "Cisco Certified Network Associate Security (CCNA)",
      issuer: "Cisco",
      category: "Network Security",
    },
  ],
};
