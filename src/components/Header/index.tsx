import React from 'react';
import Link from "next/link";
import { Chevron } from "../Icons";

interface HeaderProps {
  title: string;
  link: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="mini__heading">
      <h1>
        <Link href={props.link}><Chevron/></Link>
        {props.title}
      </h1>
    </div>
  )
}