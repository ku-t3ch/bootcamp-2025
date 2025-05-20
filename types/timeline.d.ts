export interface Timeline {
  title: string;
  content?: string;
  date: string;
  circleColor?: string;
  lineColorTo?: string;
  details?: TimelineDetail[];
}

export interface TimelineDetail {
  time: string;
  detail: string;
}
