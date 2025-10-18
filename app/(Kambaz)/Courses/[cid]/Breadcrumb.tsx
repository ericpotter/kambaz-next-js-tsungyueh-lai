"use client";
import React from "react";
import { usePathname } from "next/navigation";


export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
    const pathname = usePathname();
    const segments = pathname.split("/");
    const coursesIndex = segments.indexOf("Courses");
    const displayName = segments[coursesIndex + 2] || segments[segments.length - 1];

    return (
        <span>
            {course?.name} &gt; {displayName}
        </span>
    );
}
