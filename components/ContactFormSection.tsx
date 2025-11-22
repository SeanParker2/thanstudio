"use client";
import React, { useState } from "react";

export function ContactFormSection() {
  const [inquiryType, setInquiryType] = useState("project");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const triageItems: Array<{ key: "project" | "career"; label: string }> = [
    { key: "project", label: "开启一个新项目" },
    { key: "career", label: "加入我们 / 职业发展" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("请填写所有必填项。");
      return;
    }
    setError("");

    const recipientEmail = "1308973470@qq.com";
    const subject = `新项目咨询 - 来自 ${name}`;
    const body = `姓名: ${name}\n邮箱: ${email}\n公司: ${company || "未填写"}\n预算范围: ${budget || "未选择"}\n---\n项目信息:\n${message}`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-brand-white text-brand-black pb-20 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* 分类器 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {triageItems.map((item) => {
            const active = inquiryType === item.key;
            const base =
              "p-8 border-2 text-left transition-all duration-300 rounded-md";
            const activeCls = "border-brand-red bg-red-50";
            const inactiveCls = "border-gray-200 hover:border-brand-gray-dark";
            return (
              <button
                key={item.key}
                type="button"
                className={`${base} ${active ? activeCls : inactiveCls}`}
                onClick={() => setInquiryType(item.key)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* 动态内容 */}
        {inquiryType === "project" && (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {error && (
              <div className="md:col-span-2">
                <p className="text-brand-red mb-4">{error}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-2">您的名字</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">您的邮箱</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">公司 (选填)</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">预算范围</label>
              <select
                className="w-full border border-gray-300 rounded-md p-3"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">请选择</option>
                <option value="10k-50k">$10k-$50k</option>
                <option value="50k-100k">$50k-$100k</option>
                <option value="100k+">$100k+</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">聊聊您的项目</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-md p-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-brand-red text-brand-white font-semibold py-3 px-8 rounded-md hover:opacity-80"
              >
                发送
              </button>
            </div>
          </form>
        )}

        {inquiryType === "career" && (
          <div>
            <h3 className="text-2xl font-semibold">我们一直在寻找优秀的人才</h3>
            <p className="text-lg mt-4 text-brand-gray-dark">
              如果您认同我们的理念，请将您的简历和作品集发送至：
            </p>
            <a
              href="mailto:1308973470@qq.com"
              className="inline-block bg-gray-100 text-brand-black font-semibold py-4 px-8 rounded-md hover:bg-gray-200 mt-6 transition-colors"
            >
              投递简历与作品集
            </a>
          </div>
        )}
      </div>
    </section>
  );
}