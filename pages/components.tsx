import type { NextPage } from "next";
import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { HSpacer, VSpacer } from "@/components/common/Spacer";
import { CustomInput } from "@/components/CustomInput";
import { avatarList } from "@/components/data/AvatarList";
import { DeleteHintList } from "@/components/DeleteHintList";
import { MemberList } from "@/components/MemberList";
import { NNAndIcon } from "@/components/NNAndIcon";
import { TempComponent } from "@/components/TempComponent";

const Component: NextPage = () => {
  const [text, setText] = useState("");
  const [nickname, setNickname] = useState("");
  const [avatarIndex, setAvatarIndex] = useState(0);
  const exampleNameList = [
    "ふかむーる",
    "ふかみん",
    "ふかむー",
    "ふかめも",
    "KJ",
  ];

  const exampleHintList = [
    { text: "フルハウス", isSelect: false },
    { text: "トランプ", isSelect: false },
    { text: "オールイン", isSelect: false },
    { text: "トランプ", isSelect: false },
    { text: "ストレート", isSelect: false },
  ];

  return (
    <>
      <VStack>
        <VSpacer size={4} />
        <Container maxW="container.lg">
          <Heading size="lg" textAlign="center">
            Components Mock Storybook
          </Heading>

          {/*  common/Spacer/VSpacer  */}
          <VSpacer size={8} />
          <Heading size="lg">common/Spacer/VSpacer</Heading>
          <Card variant="filled">
            <CardBody>
              <Box bg="green.400" w="100%" color="white">
                Box A
              </Box>
              <VSpacer size={12} />
              <Box bg="green.400" w="100%" color="white">
                Box B
              </Box>
            </CardBody>
          </Card>

          {/* common/Spacer/HSpacer */}
          <VSpacer size={8} />
          <Heading size="lg">common/Spacer/HSpacer</Heading>
          <Card variant="filled">
            <CardBody>
              <HStack>
                <Box bg="green.400" color="white">
                  Box A
                </Box>
                <HSpacer size={12} />
                <Box bg="green.400" color="white">
                  Box B
                </Box>
              </HStack>
            </CardBody>
          </Card>

          {/* CustomInput */}
          <VSpacer size={8} />
          <Heading size="lg">CustomInput</Heading>
          <Card variant="filled">
            <CardBody>
              <CustomInput
                title={"あいことばを入力してください"}
                placeholder={"ぎゃんぶる"}
                text={text}
                setText={setText}
              />
              <p>{text}</p>
            </CardBody>
          </Card>

          {/*MemberList*/}
          <VSpacer size={8} />
          <Heading size="lg">MemberList</Heading>
          <Card variant="filled">
            <CardBody>
              <MemberList
                title={"参加者リスト"}
                memberNameList={exampleNameList}
              />
            </CardBody>
          </Card>

          {/*NNAndIcon*/}
          <VSpacer size={8} />
          <Heading size="lg">NNAndIcon</Heading>

          <Card variant="filled">
            <CardBody>
              <NNAndIcon
                title={"ニックネーム"}
                subtitle={"アイコン選択"}
                nickname={nickname}
                placeholder={"ふかまる"}
                avatarList={avatarList}
                avatarIndex={avatarIndex}
                setNickname={setNickname}
                setAvatarIndex={setAvatarIndex}
              />
            </CardBody>
            <text>名前:{nickname}</text>
            <text>Index:{avatarIndex}</text>
          </Card>

          {/* DeleteHintList */}
          <VSpacer size={8} />
          <Heading size="lg">DeleteHintList</Heading>
          <Card variant="filled">
            <CardBody>
              <DeleteHintList hintList={exampleHintList} />
              <Button
                colorScheme="blue"
                onClick={() => {
                  // eslint-disable-next-line no-console
                  console.log(exampleHintList);
                }}
              >
                チェックされているものをコンソールで確認
              </Button>
            </CardBody>
          </Card>

          {/* TempComponent */}
          <VSpacer size={8} />
          <Heading size="lg">TempComponent</Heading>
          <Card variant="filled">
            <CardBody>
              <TempComponent />
            </CardBody>
          </Card>

          {/* --------------------*/}

          {/* 追加のテンプレート：消さないでね！！ */}

          {/* --------------------*/}
          {/* メモ */}
          {/* ###/###/### の部分には components 以降のパスを記入する */}
          {/* コンポーネントの配置順番はファイルのは位置順が嬉しい (性善説) */}

          {/* コード */}
          {/* ###/###/### */}
          {/* <VSpacer size={8} />
          <Heading size="lg">###/###/###</Heading>
          <Card variant="filled">
            <CardBody>
              // ここに追加するコンポーネントを書く
            </CardBody>
          </Card> */}
        </Container>
      </VStack>
    </>
  );
};
export default Component;
