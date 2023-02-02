import MacVendor from "@/types/macVendor"
import Question from "@/types/questionType"
import Ip from "@/types/ipType"
import questions from "../data/questions.json"

export default {
    foundMacAddress: null as MacVendor | null | undefined,
    wasMacInfoUpdated: false,
    questions: questions as Question[],
    ipAddress: null as Ip | null | undefined
}