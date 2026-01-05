export type Notice = {
  id: string;
  title: string;
  body: string;
  createdAt: string; // ISO
};

export type MessageJob = {
  id: string;
  channel: "SMS" | "MMS";
  toCount: number;
  content: string;
  reservedAt?: string; // ISO
  createdAt: string; // ISO
};

export type SendLog = {
  id: string;
  jobId: string;
  channel: "SMS" | "MMS";
  status: "MOCK_SENT" | "MOCK_FAILED";
  summary: string;
  createdAt: string; // ISO
};
