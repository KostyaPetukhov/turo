import { FC, ReactNode } from "react"

export type layoutProps = {
	children: ReactNode,
	title: string,
	description?: string,
}

export type dialogTypes = {
    open: boolean
	handleClose: () => void,
	dialogTitle: string,
	dialogContent: string,
	agreeText: string,
	disagreeText:string,
	onAgree: () => void,
	onDisagree:() => void,
}