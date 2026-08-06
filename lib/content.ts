import i18nData from "@/data/i18n.json"

export type Locale = "pt-BR" | "en-US"

export const content = i18nData as Record<Locale, typeof i18nData["pt-BR"]>

export const skillsData = {
  categories: [
    {
      titleKey: "backend" as const,
      skills: ["Kotlin", "Java", "C#", ".NET", "Spring Boot", "GraphQL", "Node.js", "Python", "Entity Framework"]
    },
    {
      titleKey: "frontend" as const,
      skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      titleKey: "database" as const,
      skills: ["SQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB", "MySQL", "Elasticsearch"]
    },
    {
      titleKey: "devops" as const,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Terraform"]
    },
    {
      titleKey: "tools" as const,
      skills: ["Git", "Jira", "Confluence", "Datadog", "New Relic", "SonarQube"]
    },
    {
      titleKey: "practices" as const,
      skills: ["Clean Code", "TDD", "DDD", "Microservices", "REST APIs", "Agile/Scrum"]
    }
  ]
}
