export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      likes: {
        Row: {
          created_at: string
          id: string
          product_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          id: string
          is_seller: boolean | null
          order_count: number | null
          order_number: string | null
          order_status: string | null
          pay_method: string | null
          product_id: string | null
          total_pay: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_seller?: boolean | null
          order_count?: number | null
          order_number?: string | null
          order_status?: string | null
          pay_method?: string | null
          product_id?: string | null
          total_pay?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_seller?: boolean | null
          order_count?: number | null
          order_number?: string | null
          order_status?: string | null
          pay_method?: string | null
          product_id?: string | null
          total_pay?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      product: {
        Row: {
          created_at: string
          id: string
          is_best: boolean | null
          product_category: string | null
          product_description: string | null
          product_img: string | null
          product_name: string | null
          product_price: number | null
          product_subcategory: string | null
          product_summary: string | null
          stock: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_best?: boolean | null
          product_category?: string | null
          product_description?: string | null
          product_img?: string | null
          product_name?: string | null
          product_price?: number | null
          product_subcategory?: string | null
          product_summary?: string | null
          stock?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_best?: boolean | null
          product_category?: string | null
          product_description?: string | null
          product_img?: string | null
          product_name?: string | null
          product_price?: number | null
          product_subcategory?: string | null
          product_summary?: string | null
          stock?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      question: {
        Row: {
          content: string | null
          created_at: string
          id: string
          product_id: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          product_id?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          product_id?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_question_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          content: string | null
          created_at: string
          id: string
          product_id: string | null
          rate: number | null
          title: string | null
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          product_id?: string | null
          rate?: number | null
          title?: string | null
          user_id?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          product_id?: string | null
          rate?: number | null
          title?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          profile_img: string | null
          user_address: string | null
          user_name: string | null
          user_nickname: string | null
          user_phone: string | null
          user_type: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          profile_img?: string | null
          user_address?: string | null
          user_name?: string | null
          user_nickname?: string | null
          user_phone?: string | null
          user_type?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          profile_img?: string | null
          user_address?: string | null
          user_name?: string | null
          user_nickname?: string | null
          user_phone?: string | null
          user_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
