
export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  imageSrc?: string
  imagePosition?: string
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

const STATS: AppStat[] = [
  { value: 'Sample', label: 'Portfolio work' },
  { value: 'Admin', label: 'Focus area' },
  { value: 'Demo', label: 'Project type' },
]

export const mobileApps: MobileApp[] = [
  {
    name: 'Administrative Task Tracker',
    tagline: 'A sample system for organizing tasks and deadlines.',
    description:
      'A portfolio sample demonstrating how administrative tasks can be organized by priority, due date, status, and follow-up action. Designed to help a busy professional keep track of responsibilities and avoid missed deadlines.',
    accentColor: '#2563EB',
    stats: STATS,
    badge: 'Portfolio Sample',
  },
  {
    name: 'Records & Data Tracker',
    tagline: 'A structured approach to accurate recordkeeping.',
    description:
      'A sample tracking system inspired by administrative and financial documentation work. It demonstrates how records, pending requirements, and status updates can be organized for easier review and follow-up.',
    accentColor: '#7C3AED',
    stats: STATS,
    badge: 'Portfolio Sample',
  },
  {
    name: 'Meeting Coordination Planner',
    tagline: 'Keep meetings, notes, and action items organized.',
    description:
      'A sample meeting coordination workflow with scheduling details, discussion notes, assigned action items, and follow-up reminders. It reflects administrative coordination skills developed through organizational work.',
    accentColor: '#16A34A',
    stats: STATS,
    badge: 'Portfolio Sample',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'Executive Support Dashboard',
    tagline: 'One place to review priorities and upcoming deadlines.',
    description:
      'A proposed portfolio dashboard for tracking daily priorities, appointments, pending tasks, and important deadlines. This concept demonstrates an organized approach to executive and administrative support.',
    accentColor: '#0EA5E9',
    stats: STATS,
    badge: 'Concept Sample',
  },
  {
    name: 'Client Follow-Up Log',
    tagline: 'Track inquiries, updates, and next steps clearly.',
    description:
      'A sample follow-up log for recording customer inquiries, communication dates, current status, and next actions. It demonstrates how consistent tracking can support timely communication and reliable service.',
    accentColor: '#EF4444',
    stats: STATS,
    badge: 'Portfolio Sample',
  },
  {
    name: 'Document Checklist',
    tagline: 'Make document review more consistent.',
    description:
      'A sample checklist for reviewing required documents, checking completeness, noting discrepancies, and tracking pending submissions. It is based on relevant administrative and financial-records skills.',
    accentColor: '#0891B2',
    stats: STATS,
    badge: 'Portfolio Sample',
  },
  {
    name: 'Weekly Planning Board',
    tagline: 'Plan the week and monitor progress.',
    description:
      'A sample weekly planning board for grouping tasks, setting priorities, monitoring progress, and identifying follow-up items. It demonstrates practical organization and deadline-management methods.',
    accentColor: '#F59E0B',
    stats: STATS,
    badge: 'Portfolio Sample',
  },
]
