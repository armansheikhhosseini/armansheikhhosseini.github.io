export const siteConfig = {
  name: "Arman Sheikhhosseini",
  title: "DevOps Engineer",
  description: "DevOps Engineer with five years of experience finding solutions and determining customer satisfaction. Adept in developing products for web design, user experience, and best practices and speed.",
  accentColor: "#1d4ed8",
  social: {
    email: "arman.sheikhhosseini@gmail.com",
    location: "Turin, Piedmont",
    linkedin: "https://www.linkedin.com/in/thearmansh/",
    twitter: "https://x.com/thearmansh",
    telegram: "https://t.me/thearmanssh",
    github: "https://github.com/armansheikhhosseini",
    website: "https://armansheikhhosseini.github.io/",
  },
  aboutMe:
    "DevOps Engineer with five years of experience finding solutions and determining customer satisfaction. Adept in developing products for web design, user experience, and best practices and speed. Currently pursuing Master's in Cybersecurity at Politecnico di Torino while working with cutting-edge cloud technologies and infrastructure automation.",
  skills: [
    "AWS Services (EC2, VPC, S3, RDS, Lambda)",
    "Infrastructure as Code (Terraform, Ansible)",
    "Container Orchestration (Docker, Kubernetes)",
    "CI/CD Practices (GitLab, Jenkins)",
    "Monitoring Solutions (Prometheus, Grafana, CloudWatch)",
    "Scripting Languages (Python, Bash)",
    "Web Server Management (Apache, Nginx)",
    "Unix/Linux Administration",
    "Cloud Computing Expertise"
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
      company: "Torob",
      title: "DevOps Engineer",
      dateRange: "Nov 2022 - Present",
      bullets: [
        "Provisioned and deployed highly available AWS infrastructure (EC2, VPC, IAM, Redshift, EBS, RDS, Route 53) using Terraform, enhancing scalability and reliability while reducing provisioning time by 60%",
        "Implemented automated backup and recovery processes utilizing AWS Backup and Amazon S3 versioning, ensuring data integrity and availability in compliance with industry best practices",
        "Deployed and automated configuration management using Ansible, streamlining setup across environments and eliminating repetitive manual tasks",
        "Optimized system monitoring and alerting with Prometheus and Grafana dashboards, achieving a 25% reduction in mean time to resolution (MTTR) and enabling proactive incident handling",
        "Automated daily infrastructure tasks using Rundeck, encompassing AWS service management and backups, thereby improving operational efficiency and consistency",
        "Containerized services with Docker, accelerating deployment cycles and simplifying environment management",
        "Developed scripts in Bash and Python for system automation, reducing manual errors and saving developer hours",
        "Administered Jenkins CI/CD pipelines, performing routine maintenance, updates, configuration, and cloud configuration tasks"
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
        "Resolved an average of 50+ technical support tickets per week, maintaining a 95% customer satisfaction rating",
        "Conducted regular system and software updates, preventing potential downtimes and enhancing system performance by 20%",
        "Collaborated with cross-functional teams to identify and resolve recurring technical issues, leading to a 30% reduction in repeat tickets",
        "Maintained comprehensive documentation of technical issues and resolutions, streamlining knowledge sharing and reducing resolution time by 15%",
        "Utilized remote support tools like Zendesk and TeamViewer to troubleshoot and resolve customer issues efficiently"
      ],
    },
  ],
  education: [
    {
      school: "Politecnico di Torino",
      degree: "Master's in Cybersecurity",
      dateRange: "Expected graduation Jan 2026",
      achievements: [
        "Currently pursuing advanced studies in cybersecurity",
        "Focus on cloud security and infrastructure protection",
        "Research in DevSecOps practices and automation"
      ],
    },
    {
      school: "Azad University",
      degree: "Bachelor of Computer Software Engineering",
      dateRange: "Graduated Jan 2018",
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
      name: "Cisco Certified Network Associate Security (CCNA)",
      issuer: "Cisco",
      category: "Network Security",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      category: "Cybersecurity",
    },
    {
      name: "Linux Professional Institute LPIC-1",
      issuer: "Linux Professional Institute",
      category: "Linux Administration",
    },
    {
      name: "Linux Professional Institute LPIC-2",
      issuer: "Linux Professional Institute",
      category: "Advanced Linux",
    },
    {
      name: "Microsoft Certified Systems Administrator (MCSA)",
      issuer: "Microsoft",
      category: "Windows Administration",
    },
  ],
};
